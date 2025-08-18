import React from "react"

export function Form() {
  function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const data = new FormData(formEl)
    const one = data.get("one")
    console.log(one)
  }
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
    <label>one:
        <input name="one" type="text" />
    </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

