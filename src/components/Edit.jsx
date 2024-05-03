import React from "react";

export default function Edit({ todo, setEditDisplay, editTodo }) {

  const [formData, setFormData] = React.useState({
    id:todo.id,
    title: todo.title,
    description: todo.description,
    status: todo.status
  })
  function handleChange(e) {
    console.log(e.target.value)
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }
  function onClose() {
    setEditDisplay(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(formData)
    onClose()
  }
  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-8 w-96">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title" name="title" onChange={handleChange} value={formData.title} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Description
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Description" name='description' onChange={handleChange} value={formData.description} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 items-center">
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Status
                </label>
                <div className="relative mb-4">
                  <select value={formData.status} name='status' onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value='todo'>To Do</option>
                    <option value='doing'>Doing</option>
                    <option value='done'>Done</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type='submit'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4" >
                Save
              </button>
              <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}