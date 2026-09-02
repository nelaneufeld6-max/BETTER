# BETTER Public Beta — Accounts Edition

This is the existing BETTER MVP upgraded with optional real user accounts using Supabase Auth. The application remains free and local-first when account credentials are not configured.

## Configure accounts
1. Create a free Supabase project.
2. Enable Email/Password authentication.
3. Copy `config.example.js` to `config.js` and set the project URL and anon/public key.
4. Deploy the project. Never use a Supabase service-role key in the browser.

The current MVP data remains local unless a database sync layer is added. Authentication itself is real; cloud persistence of the full BETTER profile should be the next backend step.

## Accounts

Supabase authentication is configured for the connected BETTER project. Users can create a free email/password account and sign in. The current MVP still keeps the main personal-system data in browser local storage; cloud synchronization is the next backend step.
Deployment trigger
