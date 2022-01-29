const handleGetTodos= (req, res, db) => {
	db.select('*').from('todo').orderBy('id', 'desc')
	.then(todos => {
		res.status(200).json(todos);
	})
	.catch(err => res.status(400).json('Error getting todos'));
}

module.exports = {
    handleGetTodos: handleGetTodos
};
