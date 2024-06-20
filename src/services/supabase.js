
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://abtwlrlvdhlrxqiyqmqd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidHdscmx2ZGhscnhxaXlxbXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MzIzNDEsImV4cCI6MjAzNDMwODM0MX0.VY7dOQT-GAYJxQquYGL1QSbGxe9M7gWrSTDcdh6B808"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;