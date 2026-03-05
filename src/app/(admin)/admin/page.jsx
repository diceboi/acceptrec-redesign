import { Heading, Text } from "@/components/ui/Typography";

export default function AdminDashboardPage() {
    return (
        <div>
            <Heading as="h2" className="mb-4 text-black dark:text-white">
                Vezérlőpult
            </Heading>
            <Text>
                Üdvözlünk az admin felületen! Itt kezelheted az oldalakat és a komponenst.
            </Text>
        </div>
    );
}
