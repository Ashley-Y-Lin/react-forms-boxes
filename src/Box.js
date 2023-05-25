function Box({height, width, bgColor, removeBox}) {
  const containerStyle = {
    "maxWidth": `${width + 50}px`,
  }
  const boxStyle = {
    "height": `${height}px`,
    "width": `${width}px`,
    "background-color": bgColor
  }
  return (
    <div className="Box" style={containerStyle}>
      <div style={boxStyle}></div>
      <button onClick={removeBox}>Remove Box</button>
    </div>
  )
}

export default Box;