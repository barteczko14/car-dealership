import { MongoClient } from 'mongodb'

export async function connectDatabase() {
	const client = await MongoClient.connect(
		'mongodb+srv://barteczko14:3KBSNUyywZ2nfxQx@cluster0.feqsk3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
	)

	return client
}




