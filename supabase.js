/* BETTER Supabase integration. Uses only the public/publishable browser key. */
let client=null;
function accountConfigured(){return !!(window.BETTER_CONFIG?.SUPABASE_URL&&window.BETTER_CONFIG?.SUPABASE_ANON_KEY&&window.supabase)}
async function initAccount(){if(!accountConfigured())return null;if(!client)client=window.supabase.createClient(window.BETTER_CONFIG.SUPABASE_URL,window.BETTER_CONFIG.SUPABASE_ANON_KEY);return client}
async function getSession(){const c=await initAccount();if(!c)return null;const {data}=await c.auth.getSession();return data.session}
async function signUp(email,password,name=''){const c=await initAccount();if(!c)throw Error('Accounts are not configured yet.');return c.auth.signUp({email,password,options:{data:{name}}})}
async function signIn(email,password){const c=await initAccount();if(!c)throw Error('Accounts are not configured yet.');return c.auth.signInWithPassword({email,password})}
async function signOut(){const c=await initAccount();if(c)await c.auth.signOut()}
async function saveCloudState(state){const c=await initAccount();const session=await getSession();if(!c||!session)return;const {error}=await c.from('user_state').upsert({user_id:session.user.id,state,updated_at:new Date().toISOString()},{onConflict:'user_id'});if(error)throw error}
async function loadCloudState(){const c=await initAccount();const session=await getSession();if(!c||!session)return null;const {data,error}=await c.from('user_state').select('state').eq('user_id',session.user.id).maybeSingle();if(error)throw error;return data?.state||null}
async function saveCloudProfile(name){const c=await initAccount();const session=await getSession();if(!c||!session)return;const {error}=await c.from('profiles').upsert({id:session.user.id,display_name:name,updated_at:new Date().toISOString()},{onConflict:'id'});if(error)throw error}
async function resetPassword(email){const c=await initAccount();if(!c)throw Error('Accounts are not configured yet.');return c.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+'/#reset-password'})}
async function updatePassword(password){const c=await initAccount();if(!c)throw Error('Accounts are not configured yet.');return c.auth.updateUser({password})}
async function deleteAccount(){const c=await initAccount();if(!c)throw Error('Accounts are not configured yet.');const {error}=await c.rpc('delete_my_account');if(error)throw error;await c.auth.signOut()}
