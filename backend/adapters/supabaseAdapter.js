import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.URL_SUPABASE,process.env.PUBLIC_ANO_KEY
)
console.log(process.env.URL_SUPABASE);

// progress
export async function getMyprogress(){
    console.log('In my supabase adapter 😊');
    const {data,error} = await supabase.from('Progress').select('*');
    if(error) {
        console.error('supabase error',error);
    }else return data;
    }

// player
/**
 * Function to write a specific player
 * @param {*} player
 * @returns 
 */
 export async function setPlayerData(player) {
  const { data, error } = await supabase.from('Player').insert([
    {
      name: player.name,
      birthday: player.birthday,
      subject: player.subject,
    },
  ]);
  if (error) console.log('Error', error);
  else return data;
}