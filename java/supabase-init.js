const supabase Client= window.supabase.createClient(
  "https://muhblwgrpndptbjyatlr.supabase.co"
  "sb_publishable_XCSzLvd_E5fw35ZJ7xvJSA_XZVXG_ZR"
);
 if (supabaseClient) {
   
console.log("databse Connected:", supabaseClient);
 }
else{
  console.log("database not connected");
}
