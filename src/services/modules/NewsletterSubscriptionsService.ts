import api from "../axios";
import type {
  CreateNewsletterSubscriptionPayload,
  CreateNewsletterSubscriptionResponse,
} from "../../types/newsletter";
import type { ApiResponse } from "../../types/common";

export const createNewsletterSubscription = (
  data: CreateNewsletterSubscriptionPayload
): Promise<ApiResponse<CreateNewsletterSubscriptionResponse>> =>
  api.post("/newsletter-subscriptions", data);
