
export const heavyProcess = ( iterations ) => {
    for (let i = 0; i < iterations; i ++)
    {
        console.log("Heavy process in action");
    }
    return `${ iterations } iterations made`
};