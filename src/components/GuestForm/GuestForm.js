
function GuestForm(props){

    const newGuestName =props.newGuestName;
    const setNewGuestName=props.setNewGuestName;
    const newGuestMeal=props.newGuestMeal;
    const setNewGuestMeal=props.setNewGuestMeal;
    const handleSubmit =props.handleSubmit;

    return (
        <>
        <h2>Add a new guest</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          value={newGuestName}
          onChange={(evt) => setNewGuestName(evt.target.value)}
        />
        <div>
          Would this guest like a kid's meal?
          <div >
            <div>
              <label>
                <input
                  type="radio"
                  value={true}
                  checked={newGuestMeal === 'true'}
                  name="kidsMeal"
                  onChange={(evt) => setNewGuestMeal(evt.target.value)}
                />
                Yes, this guest would like a Kid's Meal
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value={false}
                  checked={newGuestMeal === 'false'}
                  name="kidsMeal"
                  onChange={(evt) => setNewGuestMeal(evt.target.value)}
                />
                No, this guest would not like a Kid's Meal
              </label>
            </div>
          </div>
        </div>
        <button type="submit">Add Guest</button>
      </form>
      </>
    )
}

export default GuestForm;