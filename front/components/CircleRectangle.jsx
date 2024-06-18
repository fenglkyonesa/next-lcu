function CircleRectangle({ width, height, color }) {
    const borderRadius = width / 2; // 圆柱的border-radius为宽度的一半

    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: color,
                borderRadius: borderRadius,
            }}
        />
    );
}
export default CircleRectangle;