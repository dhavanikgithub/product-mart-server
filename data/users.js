import bcrypt from 'bcryptjs'

const users = [
	// Standard users
	{
		name: 'dhavanik',
		email: 'dhavanik@gmail.com',
		password: bcrypt.hashSync('Sttl@123', 10), //  10 = num rounds
	},
	{
		name: 'hp',
		email: 'hp@gmail.com',
		password: bcrypt.hashSync('Sttl@123', 10), //  10 = num rounds
	},
]

export default users
