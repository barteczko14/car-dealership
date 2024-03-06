import { MongoClient } from 'mongodb'

export async function connectDatabase() {
	const client = await MongoClient.connect(
		'mongodb+srv://yourdreamcar:rMtpO7Yam8CGHmKc@cluster0.feqsk3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
	)

	return client
}
