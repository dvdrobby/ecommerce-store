import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('64ce83fb88cfbdb3fba12d5f')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  )
}

export default HomePage;