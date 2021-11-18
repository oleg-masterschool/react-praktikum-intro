export const Plan = ({ plans = [] }) => {
    const style = {
        color: 'brown',
        marginTop: '24px'
    }
    return (
        <div style={style}>
            {plans.join(',')}
        </div>
    );
};
