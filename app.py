# streamlit_app.py
import streamlit as st
from st_supabase_connection import SupabaseConnection
import subprocess

st.set_page_config(page_title="Find Your Next Unicorn Founders Via LinkedIn", page_icon=":unicorn:", layout="wide")
st.title("Find Your Next Unicorn Founders Via LinkedIn :unicorn_face:")
st.subheader("This list shows filters for keywords such as 'Building something new' to display soon-to-be-founders. Results refresh on a daily basis.")

st_supabase_client = st.connection(
    name="founder_leads",
    type=SupabaseConnection,
    ttl=None,
    #url="https://qeamsxbzhkvzcydmgpnl.supabase.co", # not needed if provided as a streamlit secret
    #key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlYW1zeGJ6aGt2emN5ZG1ncG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5ODgxMTEsImV4cCI6MjAyMzU2NDExMX0.JkReDOVMErD6x8oJxPnSlQwcVYraU48S7XPqc8vb4Fc", # not needed if provided as a streamlit secret
)

# Perform query.
rows = st_supabase_client.query("*", table="founder_leads", ttl=0).execute()

data_to_display = [ {"Name": row['fullName'], "Profile URL": row['profileUrl'], "Headline": row['headline']} for row in rows.data ]
st.dataframe(data_to_display)