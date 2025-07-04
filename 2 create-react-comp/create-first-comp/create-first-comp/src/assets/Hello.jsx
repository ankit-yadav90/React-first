function Hello() {

  let myName = 'ankit';
  let number = 9044;
  let fullName = () => {
    return 'ankit yadav'
  }
  return <h3>
    MessageNo: {number} i am a coder {fullName()}
  </h3>
}

export default Hello;