# BETTER Public Beta — Accounts Edition

BETTER is a local-first personal improvement system for goals, daily actions, decisions, beauty and fitness. The public beta also supports optional real email/password accounts and cloud synchronization through Supabase.

## Accounts and cloud sync
1. Create or use the connected Supabase project.
2. Enable Email/Password authentication.
3. `config.js` contains only the browser-safe Supabase publishable/anon key; never put a Supabase service-role key in browser code.
4. Deploy the project.

When a user is signed in, BETTER syncs the main personal-system state to `user_state` and the display name to `profiles`. Row-level security restricts those records to their owning account.

## Data controls
Users can export local BETTER data from Profile, delete local browser data, log out, reset their password, and request account/cloud-data deletion from the account controls.

## Current limitations
The MVP does not perform live web research or connect live shopping/product-review databases. Beauty products, decisions and other example information are demo content unless a future research layer is connected.

For a commercial launch, review the privacy notice, terms, data retention, analytics and account-deletion process with qualified legal counsel.

## BETTER Premium Preview

This build adds a Premium development preview without billing or paid AI API calls.

Included:
- Premium dashboard and feature hub
- Local AI Personal Coach test mode (no external AI requests)
- Weekly Intelligence report generator
- Personal progress/consistency dashboard
- Advanced Goals, Fitness, Beauty and Decision Lab entry points
- `PREMIUM PREVIEW` developer badge

Billing/subscriptions and live AI API integration are intentionally not connected yet.
