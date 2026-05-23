import supabase from "../../supabaseClient";

export const COMPANY_NAME = 'Vuma';

export const APPNAME = async () => {
  const { data, error } = await supabase
    .from('env_variables')
    .select('app_name')
    .single();

  if (error) {
    console.error('Error fetching app name:', error);
    return COMPANY_NAME; // Fallback to default company name
  }
  return data?.app_name;
}

export const APP_NAME = await APPNAME();