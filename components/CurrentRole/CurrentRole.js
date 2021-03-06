export default function CurrentRole() {
	return (
		<div className="currentRole">
			<p className="title">Current Role</p>
			<p style={{ display: "inline" }}>Currently, I'm working on </p>
			<a
				href="https://digital.nhs.uk/services/nhs-pathways"
				rel="noreferrer"
				target="_blank"
				style={{ display: "inline" }}
			>
				NHS Pathways
			</a>
			<p style={{ display: "inline" }}>
				. This is about 50/50 between maintaining the existing products and
				deploying a new product to the cloud.
			</p>
			<p>
				The existing products are mostly built using C# utilising ASP.NET and I'm
				working as part of a team. After learning the ropes, the service team that
				has maintained them for the past 2 years have departed and a new team has
				joined. This has caused a sudden change in dynamic, and I find myself
				helping the new team get started.
			</p>
			<p>
				The new product is being developed by the reporting team, and it is my
				responsibility to deploy it to the cloud. We have existing infrastructure
				in place, so I'm learning how to integrate it into an existing Kubernetes
				cluster. At the same time, I'm learning to use Terraform to provision the
				required AWS resources.
			</p>
		</div>
	);
}
