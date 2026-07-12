
import Investigation from "./pages/Investigation";

<Routes>

<Route path="/" element={<Landing />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route
path="/investigation/:id"
element={<Investigation />}
/>

</Routes>
