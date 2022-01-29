const handleRemoveTodo = (req, res, db) => {
	const {id} = req.body;
	if (!id)
		return res.status(400).json('Incorrect form submission');

	db('todo').where({id: id}).del()
	.then(success => {
		if (success)
			res.status(200).json("Todo deleted");
		else
			res.status(400).json("Todo not found");
	})
	.catch(err => res.status(400).json('Unable to delete Todo'))
}

module.exports = {
    handleRemoveTodo: handleRemoveTodo
};