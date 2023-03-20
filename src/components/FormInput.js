function FormInput(str){
  return (

    <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}

export default FormInput;
/* would be cool here to have a form that takes in a string, and returns onlt capital letters, in order. */
