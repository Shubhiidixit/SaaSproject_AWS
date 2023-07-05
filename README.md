# College Enquiry Website
A Software-as-a-service(Saas) Project

# Project Overview: 
The college enquiry website with an integrated chatbot offers students a convenient and interactive platform to address their doubts and concerns regarding college or university admissions. With a user-friendly interface, students can easily navigate through the website to access detailed information about courses, academics, admission requirements, alumni and other essential aspects. The chatbot serves as a virtual assistant, allowing students to engage in real-time conversations and ask questions related to admissions.

# AWS/Cloud Services used:
* Elastic Compute Cloud (EC2)
* Elastic Load Balancer (ELB)
* Web Application Firewall (WAF)
* AWS Cognito
* Cloudfront

# Workflow:
![image](https://github.com/Shubhiidixit/SaaSproject_AWS/assets/123651074/e1e25313-b7ea-4697-be75-c0528349eace)

* When a user sends a request to access the website, the request first goes through AWS WAF. This is like a security guard that checks the request for any suspicious activity or known threats like SQL injection or cross-site scripting. If the request passes the WAF's checks, it then goes to the Elastic Load Balancer. This is like a traffic controller that distributes incoming requests to multiple EC2 instances, ensuring that the website can handle a large volume of traffic and avoid downtime.
* But even with the load balancer, users still need to authenticate themselves to access certain parts of our website. That's where Amazon Cognito comes in. Cognito is like a bouncer at a nightclub - it verifies the user's identity and allows them to access the appropriate parts of our website based on their role or permissions.
* Finally, to enhance my website's performance, I used CloudFront. This is like a network of servers distributed around the world that cache website's content, making it faster and more reliable for users no matter where they are located.
* So, by combining these AWS services, I have deployed a secure, scalable, and high-performing website that can handle a large volume of traffic and keep our users' data safe.
