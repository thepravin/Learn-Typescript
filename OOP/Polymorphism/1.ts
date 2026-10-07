export{}



// allows objects from different classes to respond to the same method call but with distinct implementations, making code more flexible and reusable.

interface MessageProvider {
    send(userId:number, message:string): Promise<void>;
}


class EmailProvider implements MessageProvider{
    async send(userId:number, message:string): Promise<void>{
        console.log(`[Email] sending to ${userId}: ${message}`)
    }
}

class SmsProvider implements MessageProvider {
  async send(userId: number, message: string): Promise<void> {
    console.log(`[SMS] Texting ${userId}: ${message}`);
  }
}

class NotificationService {
    private provider: MessageProvider;

    constructor(provider: MessageProvider){
        this.provider = provider
    }

    public setProvider(newProvider: MessageProvider){
        this.provider = newProvider
    }

    public async alertUser(userId:number, message:string){
        await this.provider.send(userId, message)
    }
}




let myService = new NotificationService(new EmailProvider());
myService.alertUser(123,"Invoice is ready")


myService = new NotificationService(new SmsProvider());
myService.alertUser(156,"Welcome email")