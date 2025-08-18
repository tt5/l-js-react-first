import React from "react"

export function Form() {
  function submit(data) {
    const one = data.get("one")
    console.log(one)
  }
  return (
    <>
      <form action={submit}>
    <label>one:
        <input name="one" type="text" />
    </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

