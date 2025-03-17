import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seedDatabase() {
	await prisma.user.createMany({
		data: [
			{ email: 'user1@example.com', password: 'hashedpassword1', name: 'John Doe' },
			{ email: 'user2@example.com', password: 'hashedpassword2', name: 'Jane Doe' },
		],
	})
}

async function fetchData() {
	const users = await prisma.user.findMany()
	console.log(users)
}

await seedDatabase()
await fetchData()


// Różnica między podejsciu sql a prisma:
// INSERT INTO users (email, password, name) VALUES ('user1@example.com', 'hashedpassword1', 'John Doe');
// INSERT INTO users (email, password, name) VALUES ('user2@example.com', 'hashedpassword2', 'Jane Doe');
// SELECT * FROM users;