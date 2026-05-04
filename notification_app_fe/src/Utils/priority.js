export const getPriority = (n) => {
    const weights = {
        Placement: 3,
        Event: 2,
        Result: 1
    };

    return (
        weights[n.Type] * 1000 +
        new Date(n.Timestamp).getTime()
    );
};