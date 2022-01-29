const handleAddTodo = (req, res, db) => {
	const { description } = req.body;
	if (!description)
		return res.status(400).json('Incorrect form submission');

	db('todo').returning('*').insert({
		description: description
	})
	.then(todo => {
		res.status(200).json(todo);
	})
	.catch(err => res.status(400).json('Unable to create todo'))
}

module.exports = {
    handleAddTodo: handleAddTodo
};