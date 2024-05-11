type Variable =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Variable }
    | Array<Variable>;

export const deepClone = <T = Variable>(variable: T) => {
    const stringifiedVariable = JSON.stringify(variable);
    const clonedVariable: T = JSON.parse(stringifiedVariable);

    return clonedVariable;
};
