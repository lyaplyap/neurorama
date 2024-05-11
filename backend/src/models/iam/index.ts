import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';
import { CreateIamTokenResponse } from '@yandex-cloud/nodejs-sdk/dist/generated/yandex/cloud/iam/v1/iam_token_service';

import config from '../../config';

class IAM {
    _iamToken: string | null = null;
    _expiresAt: Date | null = null;
    
    constructor() {}

    isValid() {
        const hasToken = this._iamToken !== null;

        const currentDate = new Date();
        const isExpired = this._expiresAt === null || (this._expiresAt <= currentDate);

        return hasToken && !isExpired;
    }

    update({ iamToken, expiresAt }: CreateIamTokenResponse) {
        this._iamToken = iamToken;
        this._expiresAt = expiresAt;
    }

    async generate() {
        const { yandexOAuthToken } = config;
        const { iam: { iam_token_service: { CreateIamTokenRequest } } } = cloudApi;

        const session = new Session({ oauthToken: yandexOAuthToken });
        const client = session.client(serviceClients.IamTokenServiceClient);

        const generation = await client.create(CreateIamTokenRequest.fromPartial({
            yandexPassportOauthToken: yandexOAuthToken
        }));

        return generation;
    }

    async getToken() {
        if (!this.isValid()) {
            const generation = await this.generate();

            this.update(generation);
        }

        return this._iamToken;
    }
}

const iam = new IAM();

export default iam;
