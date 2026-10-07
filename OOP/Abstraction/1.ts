// Abstraction is the process of hiding complex background details and showing only the essential features to the user. It defines what an object should do, but leaves the decision of how it does it to the specific concrete classes.



// 1. Using Interfaces (Pure Abstraction)

// It simply lists the methods and properties that a class must have if it claims to implement that interface.


interface CloudStorage {
  uploadFile(fileName: string, sizeInMb: number): boolean;
  deleteFile(fileName: string): boolean;
}


class S3Storage implements CloudStorage {
  public uploadFile(fileName: string, sizeInMb: number): boolean {
    console.log(`Uploading ${fileName} to AWS S3 bucket...`);
    return true;
  }

  public deleteFile(fileName: string): boolean {
    console.log(`Deleting ${fileName} from AWS S3...`);
    return true;
  }
}

class GCSStorage implements CloudStorage {
  public uploadFile(fileName: string, sizeInMb: number): boolean {
    console.log(`Uploading ${fileName} to Google Cloud Storage bucket...`);
    return true;
  }

  public deleteFile(fileName: string): boolean {
    console.log(`Deleting ${fileName} from GCP...`);
    return true;
  }
}


// 2. Using Abstract Classes (Partial Abstraction)

// You cannot instantiate this directly
abstract class DatabaseConnection {
  protected connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  public ping(): void {
    console.log(`Pinging database at ${this.connectionString}...`);
  }

  public abstract connect(): void;
  public abstract executeQuery(query: string): any[];
}


class PostgresDatabase extends DatabaseConnection {
  public connect(): void {
    console.log(`Connecting to Postgres using pg-node at ${this.connectionString}`);
  }

  public executeQuery(query: string): any[] {
    console.log(`Executing SQL on Postgres: ${query}`);
    return [{ id: 1, result: 'data' }];
  }
}

class MongoDatabase extends DatabaseConnection {
  public connect(): void {
    console.log(`Connecting to MongoDB using mongoose at ${this.connectionString}`);
  }

  public executeQuery(query: string): any[] {
    console.log(`Executing NoSQL query on Mongo: ${query}`);
    return [{ _id: 'abc', result: 'data' }];
  }
}

const db = new PostgresDatabase("postgres://localhost:5432/mydb");
db.ping();     
db.connect();  