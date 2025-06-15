import Card from "@/components/Card";

export default function About() {
    const members = [
    { name: "Suhas", prof: "Python Dev", src: "/suhas.png" },
    { name: "Anjali", prof: "UI Designer", src: "/suhas.png" },
    { name: "Ravi", prof: "DevOps Engineer", src: "/suhas.png" },
    { name: "Neha", prof: "Frontend Dev", src: "/suhas.png" },
    { name: "Amit", prof: "Backend Dev", src: "/suhas.png" },
    { name: "Priya", prof: "QA Analyst", src: "/suhas.png" },
    { name: "Vikram", prof: "Product Manager", src: "/suhas.png" },
  ];


    console.log('hey this is server or client component??')
    return (
        <>
            <h1>This is about page</h1>
        <div className="flex flex-wrap gap-3.5">
            {
                members.map((member, idx)=>(
                    <Card key={idx} name={member.name} prof={member.prof} src={member.src}/>
                ))
            }
            {/* <Card name="Suhas" prof="Python dev" src='/suhas.png' /> */}
            

        </div>
        </>
    );
}               