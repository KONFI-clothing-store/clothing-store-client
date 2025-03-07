export const submitForm = (e: any) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const formValues = Object.fromEntries(formData.entries())
  console.log(formValues)
}
