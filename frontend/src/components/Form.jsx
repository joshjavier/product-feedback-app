import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

const FormContext = createContext({})

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const value = useContext(FormContext)
  return value
}

const Form = ({ children, onSubmit, initialData, submitLabel = 'Submit' }) => {
  const navigate = useNavigate()
  const canDelete = useMatch('/feedback/:id/edit')
  const [formData, setFormData] = useState(initialData || {})

  const handleUpdateField = (name, value) => {
    setFormData(state => ({ ...state, [name]: value }))
  }

  const onChange = (evt) => {
    handleUpdateField(evt.target.name, evt.target.value)
  }

  const formContext = { formData, onChange, handleUpdateField }

  return (
    <FormContext.Provider value={formContext}>
      <form onSubmit={(evt) => {
        evt.preventDefault()
        console.log('form submitted')
        onSubmit(formData)
      }}
      >
        <div className="space-y-6">
          {children}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-8">
          {canDelete && (
            <button
              type="button"
              className="max-sm:hidden btn btn-error font-bold w-[93px] me-auto"
              onClick={() => navigate(-1)}
            >
              Delete
            </button>
          )}
          <button
            type="button"
            className="max-sm:hidden btn btn-neutral font-bold w-[93px]"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary font-bold sm:order-last w-full sm:w-36"
            type="submit"
          >
            {submitLabel}
          </button>
          <button
            type="button"
            className="sm:hidden btn btn-neutral font-bold w-full"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          {canDelete && (
            <button
              type="button"
              className="sm:hidden btn btn-error font-bold w-full"
              onClick={() => navigate(-1)}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </FormContext.Provider>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func,
  initialData: PropTypes.object,
  submitLabel: PropTypes.string,
}

export default Form
