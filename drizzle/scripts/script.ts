import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { usersTable } from '../db/schema'

const db = drizzle(process.env.DATABASE_URL_DRIZZLE!)

async function main() {
	const user1: typeof usersTable.$inferInsert = {
		name: 'John3',
		password: 'hashed_password',
		email: 'john3@example.com',
	}
	const user2: typeof usersTable.$inferInsert = {
		name: 'John2',
		password: 'hashed_password',
		email: 'john2@example.com',
	}
	await db.insert(usersTable).values(user1)
    await db.insert(usersTable).values(user2)
	

	const users = await db.select().from(usersTable)
	console.log('Getting all users from the database: ', users)
}

main()
