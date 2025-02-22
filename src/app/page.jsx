import Hero from "@/components/Hero"
import TaskList from "@/components/TaskList"

export default function Home() {
	return (
		<div className="bg-black text-white">
			<Hero />
			<TaskList />
			Hello, World!
		</div>
	)
}