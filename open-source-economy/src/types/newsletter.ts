export type CreateNewsletterSubscriptionPayload = {
  email: string;
  name: string;
  message: string;
  linkedin?: string;
};

export type CreateNewsletterSubscriptionResponse = {
  id: number;
  email: string;
  name: string;
  message: string;
  linkedin?: string;
};


