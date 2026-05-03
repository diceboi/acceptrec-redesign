DROP POLICY IF EXISTS "Public can read published jobs" ON jobs;
DROP POLICY IF EXISTS "Service role full access" ON jobs;

CREATE POLICY "Jobs anon read all" ON jobs FOR SELECT USING (true);
CREATE POLICY "Jobs anon insert" ON jobs FOR INSERT WITH CHECK (true);
CREATE POLICY "Jobs anon update" ON jobs FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Jobs anon delete" ON jobs FOR DELETE USING (true);
