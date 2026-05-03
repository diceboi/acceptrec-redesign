-- Policy to allow admins to update any profile
create policy "Admins can update profiles"
  on public.profiles for update
  using (
    (select role from public.profiles where id = auth.uid()) = 'admin'
  );
