const handleUpdateTodo = (req, res, db) => {
	const { id, description, done } = req.body;
	if (!id || !description || typeof done !== "boolean")
		return res.status(400).json('Incorrect form submission');
	db('todo').where({id: id}).update({
		done: done,
		description: description
	})
	.then(success => {
		if (success)
			res.status(200).json("Todo updated");
		else
			res.status(400).json("Todo not found");
	})
	.catch(err => res.status(400).json('Unable to update todo'))
}

module.exports = {
    handleUpdateTodo: handleUpdateTodo
};
