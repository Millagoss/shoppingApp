import { loadStripe } from '@stripe/stripe-js';

const publishableKey = `${process.env.PUBLISHABLE_KEY}`;

export const stripePromise = loadStripe(publishableKey);
