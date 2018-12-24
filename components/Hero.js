const heroStyle = {
  height: 400,
  background: '#555555',
  border: '1px solid #333',
}

const Hero = (props) => (
  <div style={heroStyle}>
    {props.children}
  </div>
)

export default Hero