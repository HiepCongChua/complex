-------------------------------------
/var/log/ecs/ecs-init.log
-------------------------------------
2020-08-21T04:16:27Z [INFO] pre-start
2020-08-21T04:16:29Z [INFO] start
2020-08-21T04:16:29Z [INFO] No existing agent container to remove.
2020-08-21T04:16:29Z [INFO] Starting Amazon Elastic Container Service Agent



-------------------------------------
/var/log/eb-ecs-mgr.log
-------------------------------------
2020-08-21T04:55:03Z                 "containerArn": "arn:aws:ecs:ap-southeast-1:191868485217:container/be61a19e-fc9e-4496-ab68-dc3f63c70f1b", 
2020-08-21T04:55:03Z                 "taskArn": "arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586", 
2020-08-21T04:55:03Z                 "name": "server", 
2020-08-21T04:55:03Z                 "networkBindings": [], 
2020-08-21T04:55:03Z                 "image": "hieple/multi-server", 
2020-08-21T04:55:03Z                 "lastStatus": "RUNNING", 
2020-08-21T04:55:03Z                 "memory": "128", 
2020-08-21T04:55:03Z                 "runtimeId": "81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a", 
2020-08-21T04:55:03Z                 "cpu": "0", 
2020-08-21T04:55:03Z                 "networkInterfaces": []
2020-08-21T04:55:03Z             }, 
2020-08-21T04:55:03Z             {
2020-08-21T04:55:03Z                 "containerArn": "arn:aws:ecs:ap-southeast-1:191868485217:container/d340ca5b-a20e-4072-bcb8-e4c3181aeeab", 
2020-08-21T04:55:03Z                 "taskArn": "arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586", 
2020-08-21T04:55:03Z                 "name": "client", 
2020-08-21T04:55:03Z                 "networkBindings": [], 
2020-08-21T04:55:03Z                 "image": "hieple/multi-client", 
2020-08-21T04:55:03Z                 "lastStatus": "STOPPED", 
2020-08-21T04:55:03Z                 "memory": "128", 
2020-08-21T04:55:03Z                 "runtimeId": "864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758", 
2020-08-21T04:55:03Z                 "networkInterfaces": [], 
2020-08-21T04:55:03Z                 "cpu": "0", 
2020-08-21T04:55:03Z                 "exitCode": 1
2020-08-21T04:55:03Z             }, 
2020-08-21T04:55:03Z             {
2020-08-21T04:55:03Z                 "containerArn": "arn:aws:ecs:ap-southeast-1:191868485217:container/d37c7e55-85e0-4e62-ae39-4df04fd3e401", 
2020-08-21T04:55:03Z                 "taskArn": "arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586", 
2020-08-21T04:55:03Z                 "name": "worker", 
2020-08-21T04:55:03Z                 "networkBindings": [], 
2020-08-21T04:55:03Z                 "image": "hieple/multi-worker", 
2020-08-21T04:55:03Z                 "lastStatus": "RUNNING", 
2020-08-21T04:55:03Z                 "memory": "128", 
2020-08-21T04:55:03Z                 "runtimeId": "660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc", 
2020-08-21T04:55:03Z                 "cpu": "0", 
2020-08-21T04:55:03Z                 "networkInterfaces": []
2020-08-21T04:55:03Z             }, 
2020-08-21T04:55:03Z             {
2020-08-21T04:55:03Z                 "containerArn": "arn:aws:ecs:ap-southeast-1:191868485217:container/e214269b-8d73-44ed-b0ca-df5aab5d82e6", 
2020-08-21T04:55:03Z                 "taskArn": "arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586", 
2020-08-21T04:55:03Z                 "name": "nginx", 
2020-08-21T04:55:03Z                 "image": "hieple/multi-nginx", 
2020-08-21T04:55:03Z                 "lastStatus": "PENDING", 
2020-08-21T04:55:03Z                 "memory": "128", 
2020-08-21T04:55:03Z                 "cpu": "0", 
2020-08-21T04:55:03Z                 "networkInterfaces": []
2020-08-21T04:55:03Z             }
2020-08-21T04:55:03Z         ], 
2020-08-21T04:55:03Z         "availabilityZone": "ap-southeast-1a", 
2020-08-21T04:55:03Z         "tags": [], 
2020-08-21T04:55:03Z         "memory": "512", 
2020-08-21T04:55:03Z         "lastStatus": "PENDING", 
2020-08-21T04:55:03Z         "connectivity": "CONNECTED", 
2020-08-21T04:55:03Z         "overrides": {
2020-08-21T04:55:03Z             "inferenceAcceleratorOverrides": [], 
2020-08-21T04:55:03Z             "containerOverrides": [
2020-08-21T04:55:03Z                 {
2020-08-21T04:55:03Z                     "name": "server"
2020-08-21T04:55:03Z                 }, 
2020-08-21T04:55:03Z                 {
2020-08-21T04:55:03Z                     "name": "client"
2020-08-21T04:55:03Z                 }, 
2020-08-21T04:55:03Z                 {
2020-08-21T04:55:03Z                     "name": "worker"
2020-08-21T04:55:03Z                 }, 
2020-08-21T04:55:03Z                 {
2020-08-21T04:55:03Z                     "name": "nginx"
2020-08-21T04:55:03Z                 }
2020-08-21T04:55:03Z             ]
2020-08-21T04:55:03Z         }, 
2020-08-21T04:55:03Z         "stoppedReason": "Task stopped by user", 
2020-08-21T04:55:03Z         "cpu": "0"
2020-08-21T04:55:03Z     }
2020-08-21T04:55:03Z }'
2020-08-21T04:55:03Z + '[' 0 -ne 0 ']'
2020-08-21T04:55:03Z + set -e
2020-08-21T04:55:03Z + local STOP_TIMEOUT=120
2020-08-21T04:55:03Z + local TIMEOUT=120
2020-08-21T04:55:03Z ++ eval curl -sS 'http://localhost:51678/v1/tasks?taskarn=$EB_CONFIG_ECS_TASK_ARN' '|' jq -r .KnownStatus
2020-08-21T04:55:03Z +++ jq -r .KnownStatus
2020-08-21T04:55:03Z +++ curl -sS 'http://localhost:51678/v1/tasks?taskarn=arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586'
2020-08-21T04:55:03Z + local KNOWN_STATUS=PENDING
2020-08-21T04:55:03Z + '[' PENDING '!=' STOPPED ']'
2020-08-21T04:55:03Z + '[' PENDING '!=' DEAD ']'
2020-08-21T04:55:03Z + sleep 3
2020-08-21T04:55:06Z + TIMEOUT=117
2020-08-21T04:55:06Z + '[' 117 -le 0 ']'
2020-08-21T04:55:06Z ++ eval curl -sS 'http://localhost:51678/v1/tasks?taskarn=$EB_CONFIG_ECS_TASK_ARN' '|' jq -r .KnownStatus
2020-08-21T04:55:06Z +++ jq -r .KnownStatus
2020-08-21T04:55:06Z +++ curl -sS 'http://localhost:51678/v1/tasks?taskarn=arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586'
2020-08-21T04:55:06Z + KNOWN_STATUS=STOPPED
2020-08-21T04:55:06Z + '[' STOPPED '!=' STOPPED ']'
2020-08-21T04:55:06Z + trace 'ECS task: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 is STOPPED.'
2020-08-21T04:55:06Z + echo 'ECS task: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 is STOPPED.'
2020-08-21T04:55:06Z ECS task: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 is STOPPED.
2020-08-21T04:55:06Z + eventHelper.py --msg 'ECS task: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 is STOPPED.' --severity TRACE
2020-08-21T04:55:06Z + TIMEOUT=60
2020-08-21T04:55:06Z ++ wc -l
2020-08-21T04:55:06Z ++ docker ps -q
2020-08-21T04:55:06Z + '[' 1 '!=' 1 ']'
2020-08-21T04:55:06Z + exit 0



-------------------------------------
/var/log/containers/nginx-proxy-f6d06cf90684-stdouterr.log
-------------------------------------
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: error: can not modify /etc/nginx/conf.d/default.conf (read-only file system?)
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Configuration complete; ready for start up



-------------------------------------
/var/log/ecs/ecs-agent.log.2020-08-21-04
-------------------------------------
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: handling container change event [RUNNING]" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: container change RUNNING->RUNNING is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=client runtimeID=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=client runtimeID=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: handling container change event [RUNNING]" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: container change RUNNING->RUNNING is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:48Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:51Z msg="Saving state!" module=state_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: handling container change event [RUNNING]" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: container change RUNNING->RUNNING is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=client runtimeID=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=client runtimeID=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: handling container change event [RUNNING]" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: container change RUNNING->RUNNING is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:53Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: handling container change event [RUNNING]" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: container change RUNNING->RUNNING is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=client runtimeID=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=client runtimeID=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: handling container change event [RUNNING]" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: container change RUNNING->RUNNING is redundant" module=task_manager.go
level=info time=2020-08-21T04:54:58Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:01Z msg="Saving state!" module=state_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: got acs event" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: new acs transition to: STOPPED; sequence number: 7; task stop sequence number: 0" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task moving to stopped, adding to stopgroup with sequence number: 7" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=nginx runtimeID=]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: recording execution stopped time. Essential container [nginx] stopped at: 2020-08-21 04:55:03.674203177 +0000 UTC m=+2313.644962615" module=task.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [nginx]: sending container change event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 nginx -> STOPPED, Known Sent: NONE" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [nginx]: sent container change event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 nginx -> STOPPED, Known Sent: NONE" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (RUNNING->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:03Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (RUNNING->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Task engine [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: stopping container [server]" module=docker_task_engine.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: got resource [cgroup] event: [REMOVED]" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (RUNNING->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: got resource [cgroup] event: [REMOVED]" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: redundant resource state change. cgroup to REMOVED, but already REMOVED" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (RUNNING->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:03Z msg="Task engine [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: stopping container [worker]" module=docker_task_engine.go
level=info time=2020-08-21T04:55:03Z msg="TaskHandler: batching container event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 nginx -> STOPPED, Known Sent: NONE" module=task_handler.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [server]: sending container change event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 server -> STOPPED, Exit 0, , Known Sent: RUNNING" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [server]: sent container change event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 server -> STOPPED, Exit 0, , Known Sent: RUNNING" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (STOPPED->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:04Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (STOPPED->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="TaskHandler: batching container event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 server -> STOPPED, Exit 0, , Known Sent: RUNNING" module=task_handler.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (STOPPED->STOPPED),client (STOPPED->STOPPED),worker (RUNNING->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task not steady state or terminal; progressing it" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Container [81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: Stopping stats collection" module=container.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [worker]: sending container change event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 worker -> STOPPED, Exit 0, , Known Sent: RUNNING" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [worker]: sent container change event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 worker -> STOPPED, Exit 0, , Known Sent: RUNNING" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="api/task: Updating task's known status to: STOPPED, task: awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (NONE->STOPPED) Containers: [server (STOPPED->STOPPED),client (STOPPED->STOPPED),worker (STOPPED->STOPPED),nginx (STOPPED->STOPPED),]" module=task.go
level=info time=2020-08-21T04:55:04Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (STOPPED->STOPPED) Containers: [server (STOPPED->STOPPED),client (STOPPED->STOPPED),worker (STOPPED->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: container change also resulted in task change [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: sending task change event [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 -> STOPPED, Known Sent: NONE, PullStartedAt: 2020-08-21 04:40:58.491810735 +0000 UTC m=+1468.462570173, PullStoppedAt: 2020-08-21 04:41:08.103237734 +0000 UTC m=+1478.073997197, ExecutionStoppedAt: 2020-08-21 04:55:03.674203177 +0000 UTC m=+2313.644962615]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="TaskHandler: batching container event: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 worker -> STOPPED, Exit 0, , Known Sent: RUNNING" module=task_handler.go
level=info time=2020-08-21T04:55:04Z msg="TaskHandler: Adding event: TaskChange: [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 -> STOPPED, Known Sent: NONE, PullStartedAt: 2020-08-21 04:40:58.491810735 +0000 UTC m=+1468.462570173, PullStoppedAt: 2020-08-21 04:41:08.103237734 +0000 UTC m=+1478.073997197, ExecutionStoppedAt: 2020-08-21 04:55:03.674203177 +0000 UTC m=+2313.644962615, arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 nginx -> STOPPED, Known Sent: NONE, arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 server -> STOPPED, Exit 0, , Known Sent: RUNNING, arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 worker -> STOPPED, Exit 0, , Known Sent: RUNNING] sent: false" module=task_handler.go
level=info time=2020-08-21T04:55:04Z msg="TaskHandler: Sending task change: TaskChange: [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 -> STOPPED, Known Sent: NONE, PullStartedAt: 2020-08-21 04:40:58.491810735 +0000 UTC m=+1468.462570173, PullStoppedAt: 2020-08-21 04:41:08.103237734 +0000 UTC m=+1478.073997197, ExecutionStoppedAt: 2020-08-21 04:55:03.674203177 +0000 UTC m=+2313.644962615, arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 nginx -> STOPPED, Known Sent: NONE, arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 server -> STOPPED, Exit 0, , Known Sent: RUNNING, arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 worker -> STOPPED, Exit 0, , Known Sent: RUNNING] sent: false" module=task_handler_types.go
level=info time=2020-08-21T04:55:04Z msg="Container [660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: Stopping stats collection" module=container.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: sent task change event [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 -> STOPPED, Known Sent: NONE, PullStartedAt: 2020-08-21 04:40:58.491810735 +0000 UTC m=+1468.462570173, PullStoppedAt: 2020-08-21 04:41:08.103237734 +0000 UTC m=+1478.073997197, ExecutionStoppedAt: 2020-08-21 04:55:03.674203177 +0000 UTC m=+2313.644962615]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="api/task: Updating task desired status to stopped because of container: [nginx]; task: [awseb-MultiDocker-env-1-sju9nsmr36:3 arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586, TaskStatus: (STOPPED->STOPPED) Containers: [server (STOPPED->STOPPED),client (STOPPED->STOPPED),worker (STOPPED->STOPPED),nginx (STOPPED->STOPPED),]]" module=task.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: task has reached stopped. Waiting for container cleanup" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=server runtimeID=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: handling container change event [STOPPED]" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: Container [name=worker runtimeID=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc]: container change STOPPED->STOPPED is redundant" module=task_manager.go
level=info time=2020-08-21T04:55:04Z msg="Managed task [arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586]: waiting for event for task" module=task_manager.go
level=info time=2020-08-21T04:55:11Z msg="Saving state!" module=state_manager.go



-------------------------------------
/var/log/containers/nginx-proxy/access.log
-------------------------------------




-------------------------------------
/var/log/docker-events.log
-------------------------------------
2020-08-21T05:36:47.155249283Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=5ce3b4ef11dee7d6634e251bb668dd06d8606ee36ec847bdd1cf0f383c0e731d, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:37:17.162580075Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=45e8f0fb8251bc35214c8bdc7eef3f153f9a002802fba331a5eece8588758a3d, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:37:17.162653880Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=45e8f0fb8251bc35214c8bdc7eef3f153f9a002802fba331a5eece8588758a3d, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:37:17.267222595Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=45e8f0fb8251bc35214c8bdc7eef3f153f9a002802fba331a5eece8588758a3d, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:37:47.273741290Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=3fb5381ee2c4adbec9b870984e28ca7b3052bb7001abb2bcb17b007ee2193b76, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:37:47.273809254Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=3fb5381ee2c4adbec9b870984e28ca7b3052bb7001abb2bcb17b007ee2193b76, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:37:47.367914167Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=3fb5381ee2c4adbec9b870984e28ca7b3052bb7001abb2bcb17b007ee2193b76, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:38:17.374720074Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=20b33a000df2de11d0fe458972f9badb3a9a9aff00e43ae7fd3cbb1b6b992c40, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:38:17.374784796Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=20b33a000df2de11d0fe458972f9badb3a9a9aff00e43ae7fd3cbb1b6b992c40, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:38:17.471056869Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=20b33a000df2de11d0fe458972f9badb3a9a9aff00e43ae7fd3cbb1b6b992c40, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:38:47.478527493Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=d327ea2ed74963bf3dd53ee4011b6357801f41f44f8e62fac6df3823f210a159, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:38:47.478609259Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=d327ea2ed74963bf3dd53ee4011b6357801f41f44f8e62fac6df3823f210a159, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:38:47.578074674Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=d327ea2ed74963bf3dd53ee4011b6357801f41f44f8e62fac6df3823f210a159, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:39:17.585513764Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=8b2bf68273c0fd388e391813531b2bd102af99d4b256036a12e59d8340402e9c, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:39:17.585604080Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=8b2bf68273c0fd388e391813531b2bd102af99d4b256036a12e59d8340402e9c, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:39:17.683517247Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=8b2bf68273c0fd388e391813531b2bd102af99d4b256036a12e59d8340402e9c, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:39:47.690375177Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=422dc49b3b5186e59862712fa48c006f937e4aff53d486046656e4353d02be7b, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:39:47.690464840Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=422dc49b3b5186e59862712fa48c006f937e4aff53d486046656e4353d02be7b, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:39:47.788376531Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=422dc49b3b5186e59862712fa48c006f937e4aff53d486046656e4353d02be7b, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:40:17.797078040Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=25519956d3694b039f7a70fa8080dd255245c82cf9056d13a93d3a2de97509a3, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:40:17.797145347Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=25519956d3694b039f7a70fa8080dd255245c82cf9056d13a93d3a2de97509a3, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:40:17.892025510Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=25519956d3694b039f7a70fa8080dd255245c82cf9056d13a93d3a2de97509a3, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:40:47.899025195Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=080ee4ad548e5e9f2f2779a8af2bcc818ed5fa7e750d4dfc95d0a6d007e16bb7, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:40:47.899104272Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=080ee4ad548e5e9f2f2779a8af2bcc818ed5fa7e750d4dfc95d0a6d007e16bb7, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:40:47.992216588Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=080ee4ad548e5e9f2f2779a8af2bcc818ed5fa7e750d4dfc95d0a6d007e16bb7, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:41:17.999334080Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=2b1cb19549cdacbfe7bcba460f61f4e01126829a72060817922f946cb3acc554, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:41:17.999413137Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=2b1cb19549cdacbfe7bcba460f61f4e01126829a72060817922f946cb3acc554, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:41:18.124296657Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=2b1cb19549cdacbfe7bcba460f61f4e01126829a72060817922f946cb3acc554, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:41:48.131135376Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=0731f6a77a2e9799cfd6701e6d4b00dce4c5a81454edaa9ef3d45cc879cd864c, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:41:48.131234070Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=0731f6a77a2e9799cfd6701e6d4b00dce4c5a81454edaa9ef3d45cc879cd864c, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:41:48.225368235Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=0731f6a77a2e9799cfd6701e6d4b00dce4c5a81454edaa9ef3d45cc879cd864c, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:42:18.232830868Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=60d19f056818a36b7b7636143503b37a334d934eae6cb2f734dc43d206331b43, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:42:18.232908175Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=60d19f056818a36b7b7636143503b37a334d934eae6cb2f734dc43d206331b43, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:42:18.330594849Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=60d19f056818a36b7b7636143503b37a334d934eae6cb2f734dc43d206331b43, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:42:48.338686896Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=7893800abbf8bc9b8de1a9fea2771841f8f59afaa0ef48d121086d81f4dc3b2d, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:42:48.338754778Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=7893800abbf8bc9b8de1a9fea2771841f8f59afaa0ef48d121086d81f4dc3b2d, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:42:48.431497976Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=7893800abbf8bc9b8de1a9fea2771841f8f59afaa0ef48d121086d81f4dc3b2d, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:43:18.438332245Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=3a416e513a62d52c0ffb76d7d1ca9f72bd81057feccf924d33cfb817cbdd2827, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:43:18.438398592Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=3a416e513a62d52c0ffb76d7d1ca9f72bd81057feccf924d33cfb817cbdd2827, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:43:18.539179442Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=3a416e513a62d52c0ffb76d7d1ca9f72bd81057feccf924d33cfb817cbdd2827, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:43:48.546982573Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=45f6552c8156965a0a6a00ae5ce532f055e89928cdc5c92cbe782ed8a2eca635, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:43:48.547050812Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=45f6552c8156965a0a6a00ae5ce532f055e89928cdc5c92cbe782ed8a2eca635, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:43:48.647275394Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=45f6552c8156965a0a6a00ae5ce532f055e89928cdc5c92cbe782ed8a2eca635, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:44:18.654137976Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=49df7d5bd05ab985ece97ee76db47a54c274773cd8f0d017816ca1e1d2000c8f, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:44:18.654205443Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=49df7d5bd05ab985ece97ee76db47a54c274773cd8f0d017816ca1e1d2000c8f, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:44:18.749001705Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=49df7d5bd05ab985ece97ee76db47a54c274773cd8f0d017816ca1e1d2000c8f, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:44:48.755912669Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=cb05bd386d22616006ea017a5f1112b1608a5ad7319605a54380089426f143f6, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:44:48.755992154Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=cb05bd386d22616006ea017a5f1112b1608a5ad7319605a54380089426f143f6, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:44:48.855390121Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=cb05bd386d22616006ea017a5f1112b1608a5ad7319605a54380089426f143f6, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:45:18.862379888Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=31b9b23d61643b08d34f4052a656d26f864c8520133f126bdfc37104748eb31f, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:45:18.862466596Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=31b9b23d61643b08d34f4052a656d26f864c8520133f126bdfc37104748eb31f, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:45:18.963269477Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=31b9b23d61643b08d34f4052a656d26f864c8520133f126bdfc37104748eb31f, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:45:48.970243098Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=32eef6721d0d41e4ff48ee9cbc01d53940148e9b3fe1777525fa49dbdcb51756, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:45:48.970335595Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=32eef6721d0d41e4ff48ee9cbc01d53940148e9b3fe1777525fa49dbdcb51756, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:45:49.062746411Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=32eef6721d0d41e4ff48ee9cbc01d53940148e9b3fe1777525fa49dbdcb51756, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:46:19.069822529Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=fd229d49c24cd05c869256703fe38c619743931023e67eaaa64386f14e6ad0d9, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:46:19.069909351Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=fd229d49c24cd05c869256703fe38c619743931023e67eaaa64386f14e6ad0d9, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:46:19.166443152Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=fd229d49c24cd05c869256703fe38c619743931023e67eaaa64386f14e6ad0d9, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:46:49.173825992Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=936d10af8fa7b44bf3c16b1c1a2260d6b05c9246cff8cc23bfde41dc385d57fe, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:46:49.173918811Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=936d10af8fa7b44bf3c16b1c1a2260d6b05c9246cff8cc23bfde41dc385d57fe, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:46:49.268595665Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=936d10af8fa7b44bf3c16b1c1a2260d6b05c9246cff8cc23bfde41dc385d57fe, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:47:19.276373612Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=e8480257e464f52ffb856788f20beb10f31714c9ba59badac394c7f200e8a9f7, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:47:19.276439204Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=e8480257e464f52ffb856788f20beb10f31714c9ba59badac394c7f200e8a9f7, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:47:19.389311229Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=e8480257e464f52ffb856788f20beb10f31714c9ba59badac394c7f200e8a9f7, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:47:49.396782549Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=d0e9b0db77535ec69ae7eb171a663fead12fd7bf5db7e3e3b0908e2613b9f6a6, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:47:49.396836454Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=d0e9b0db77535ec69ae7eb171a663fead12fd7bf5db7e3e3b0908e2613b9f6a6, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:47:49.488393281Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=d0e9b0db77535ec69ae7eb171a663fead12fd7bf5db7e3e3b0908e2613b9f6a6, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:48:19.495703464Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=a60e5ea58da208fdaedd58bc4a1ddb7b7a79372e914ef22247629ca3916fa888, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:48:19.495771047Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=a60e5ea58da208fdaedd58bc4a1ddb7b7a79372e914ef22247629ca3916fa888, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:48:19.596821464Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=a60e5ea58da208fdaedd58bc4a1ddb7b7a79372e914ef22247629ca3916fa888, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:48:49.603900710Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=f5de2ea7f15b67f9d4c486cad7ba1a73e5acb7da63dd273cb13e588fda95e43a, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:48:49.603980885Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=f5de2ea7f15b67f9d4c486cad7ba1a73e5acb7da63dd273cb13e588fda95e43a, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:48:49.697143928Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=f5de2ea7f15b67f9d4c486cad7ba1a73e5acb7da63dd273cb13e588fda95e43a, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:49:19.704086861Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=8786cc748b4cd07976c2627ced77b0c2a1c8d173b12479f9284df1329d2d553a, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:49:19.704189752Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=8786cc748b4cd07976c2627ced77b0c2a1c8d173b12479f9284df1329d2d553a, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:49:19.808261293Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=8786cc748b4cd07976c2627ced77b0c2a1c8d173b12479f9284df1329d2d553a, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:49:49.818385391Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=b239a5591442babe3d05234f8fd2b5b48379a8114ae72c39c5dd7d90d89bb2c5, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:49:49.818451439Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=b239a5591442babe3d05234f8fd2b5b48379a8114ae72c39c5dd7d90d89bb2c5, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:49:49.912800585Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=b239a5591442babe3d05234f8fd2b5b48379a8114ae72c39c5dd7d90d89bb2c5, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:50:19.922260728Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=80b65bd619286cf497a82bce60bb8adcfc6f1411484c726f6bc6866e1b1ad9f1, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:50:19.922332056Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=80b65bd619286cf497a82bce60bb8adcfc6f1411484c726f6bc6866e1b1ad9f1, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:50:20.016954025Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=80b65bd619286cf497a82bce60bb8adcfc6f1411484c726f6bc6866e1b1ad9f1, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:50:50.024002982Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=a6db9f8e23429b707d6031d1f6240c474b591959d3a9ad5dc8c90d5c1eadc46d, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:50:50.024085166Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=a6db9f8e23429b707d6031d1f6240c474b591959d3a9ad5dc8c90d5c1eadc46d, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:50:50.125544765Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=a6db9f8e23429b707d6031d1f6240c474b591959d3a9ad5dc8c90d5c1eadc46d, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:51:20.132328202Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=476e6643a587cac649663b534b29f1ac254c8966a0643066f75f780b8f58a146, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:51:20.132391781Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=476e6643a587cac649663b534b29f1ac254c8966a0643066f75f780b8f58a146, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:51:20.237243080Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=476e6643a587cac649663b534b29f1ac254c8966a0643066f75f780b8f58a146, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:51:50.244064410Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=dda5c9b57c270a4b0d87297bd4c13d217f6fd89750291610fee099a64ddd82a8, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:51:50.244131765Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=dda5c9b57c270a4b0d87297bd4c13d217f6fd89750291610fee099a64ddd82a8, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:51:50.339095376Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=dda5c9b57c270a4b0d87297bd4c13d217f6fd89750291610fee099a64ddd82a8, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:52:20.347574566Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=e27fa765db62ed040396ad102047d5b7d7609232f0f6f1e47b478829a32449ab, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:52:20.347662403Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=e27fa765db62ed040396ad102047d5b7d7609232f0f6f1e47b478829a32449ab, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:52:20.443114403Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=e27fa765db62ed040396ad102047d5b7d7609232f0f6f1e47b478829a32449ab, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:52:50.450239674Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=1542432d574f068e406472e6266e3ad1561a814fb5ed660a34ff6fd42555f9e5, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:52:50.450330755Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=1542432d574f068e406472e6266e3ad1561a814fb5ed660a34ff6fd42555f9e5, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:52:50.544174014Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=1542432d574f068e406472e6266e3ad1561a814fb5ed660a34ff6fd42555f9e5, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:53:20.552709422Z container exec_create: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=b83f96efbf4771ea3a2cea0bffe8a4717d38f1daafed0fe6d461f07e273bfa25, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:53:20.552774975Z container exec_start: /agent --healthcheck 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=b83f96efbf4771ea3a2cea0bffe8a4717d38f1daafed0fe6d461f07e273bfa25, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)
2020-08-21T05:53:20.661673084Z container exec_die 132d6f6db94a8ac3136089080b81f6b4c0c992d159d57ceb2ad1a4a56c78b862 (execID=b83f96efbf4771ea3a2cea0bffe8a4717d38f1daafed0fe6d461f07e273bfa25, exitCode=0, image=amazon/amazon-ecs-agent:latest, name=ecs-agent)



-------------------------------------
/var/log/ecs/ecs-agent.log
-------------------------------------
level=info time=2020-08-21T05:06:05Z msg="TCS Websocket connection closed for a valid reason" module=handler.go
level=info time=2020-08-21T05:06:05Z msg="Establishing a Websocket connection to https://ecs-t-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&cluster=awseb-MultiDocker-env-1-sju9nsmr36&containerInstance=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=19.03.6-ce" module=client.go
level=info time=2020-08-21T05:06:05Z msg="Connected to TCS endpoint" module=handler.go
level=info time=2020-08-21T05:16:31Z msg="Begin building map of eligible unused images for deletion" module=docker_image_manager.go
level=info time=2020-08-21T05:16:31Z msg="No eligible images for deletion for this cleanup cycle" module=docker_image_manager.go
level=info time=2020-08-21T05:16:31Z msg="End of eligible images for deletion: No more eligible images for deletion; Still have 6 image states being managed" module=docker_image_manager.go
level=info time=2020-08-21T05:19:11Z msg="TCS Websocket connection closed for a valid reason" module=handler.go
level=info time=2020-08-21T05:19:11Z msg="Establishing a Websocket connection to https://ecs-t-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&cluster=awseb-MultiDocker-env-1-sju9nsmr36&containerInstance=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=19.03.6-ce" module=client.go
level=info time=2020-08-21T05:19:11Z msg="Connected to TCS endpoint" module=handler.go
level=info time=2020-08-21T05:21:46Z msg="ACS Websocket connection closed for a valid reason" module=acs_handler.go
level=info time=2020-08-21T05:21:46Z msg="ACS Websocket connection closed for a valid reason: EOF" module=acs_handler.go
level=info time=2020-08-21T05:21:46Z msg="Establishing a Websocket connection to https://ecs-a-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&clusterArn=awseb-MultiDocker-env-1-sju9nsmr36&containerInstanceArn=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=DockerVersion%3A+19.03.6-ce&sendCredentials=false&seqNum=1" module=client.go
level=info time=2020-08-21T05:21:46Z msg="Connected to ACS endpoint" module=acs_handler.go
level=info time=2020-08-21T05:21:47Z msg="Saving state!" module=state_manager.go
level=info time=2020-08-21T05:30:02Z msg="TCS Websocket connection closed for a valid reason" module=handler.go
level=info time=2020-08-21T05:30:02Z msg="Establishing a Websocket connection to https://ecs-t-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&cluster=awseb-MultiDocker-env-1-sju9nsmr36&containerInstance=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=19.03.6-ce" module=client.go
level=info time=2020-08-21T05:30:02Z msg="Connected to TCS endpoint" module=handler.go
level=info time=2020-08-21T05:34:06Z msg="ACS Websocket connection closed for a valid reason" module=acs_handler.go
level=info time=2020-08-21T05:34:06Z msg="ACS Websocket connection closed for a valid reason: EOF" module=acs_handler.go
level=info time=2020-08-21T05:34:06Z msg="Establishing a Websocket connection to https://ecs-a-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&clusterArn=awseb-MultiDocker-env-1-sju9nsmr36&containerInstanceArn=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=DockerVersion%3A+19.03.6-ce&sendCredentials=false&seqNum=1" module=client.go
level=info time=2020-08-21T05:34:07Z msg="Connected to ACS endpoint" module=acs_handler.go
level=info time=2020-08-21T05:34:09Z msg="Saving state!" module=state_manager.go
level=info time=2020-08-21T05:42:11Z msg="TCS Websocket connection closed for a valid reason" module=handler.go
level=info time=2020-08-21T05:42:11Z msg="Establishing a Websocket connection to https://ecs-t-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&cluster=awseb-MultiDocker-env-1-sju9nsmr36&containerInstance=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=19.03.6-ce" module=client.go
level=info time=2020-08-21T05:42:11Z msg="Connected to TCS endpoint" module=handler.go
level=info time=2020-08-21T05:46:31Z msg="Begin building map of eligible unused images for deletion" module=docker_image_manager.go
level=info time=2020-08-21T05:46:31Z msg="No eligible images for deletion for this cleanup cycle" module=docker_image_manager.go
level=info time=2020-08-21T05:46:31Z msg="End of eligible images for deletion: No more eligible images for deletion; Still have 6 image states being managed" module=docker_image_manager.go
level=info time=2020-08-21T05:52:16Z msg="TCS Websocket connection closed for a valid reason" module=handler.go
level=info time=2020-08-21T05:52:16Z msg="Establishing a Websocket connection to https://ecs-t-1.ap-southeast-1.amazonaws.com/ws?agentHash=a250409c&agentVersion=1.42.0&cluster=awseb-MultiDocker-env-1-sju9nsmr36&containerInstance=arn%3Aaws%3Aecs%3Aap-southeast-1%3A191868485217%3Acontainer-instance%2F087719f7-06dc-40b0-bca5-5b9812dd088d&dockerVersion=19.03.6-ce" module=client.go
level=info time=2020-08-21T05:52:16Z msg="Connected to TCS endpoint" module=handler.go



-------------------------------------
/var/log/docker
-------------------------------------
time="2020-08-21T04:15:50.862906875Z" level=info msg="stopping healthcheck following graceful shutdown" module=libcontainerd
time="2020-08-21T04:15:50.862967378Z" level=info msg="stopping event stream following graceful shutdown" error="context canceled" module=libcontainerd namespace=plugins.moby
\nFri Aug 21 04:15:53 UTC 2020\n
time="2020-08-21T04:15:53.226380367Z" level=info msg="Starting up"
time="2020-08-21T04:15:53.228258873Z" level=info msg="libcontainerd: started new containerd process" pid=3485
time="2020-08-21T04:15:53.228296920Z" level=info msg="parsed scheme: \"unix\"" module=grpc
time="2020-08-21T04:15:53.228307639Z" level=info msg="scheme \"unix\" not registered, fallback to default scheme" module=grpc
time="2020-08-21T04:15:53.228327683Z" level=info msg="ccResolverWrapper: sending update to cc: {[{unix:///var/run/docker/containerd/containerd.sock 0  <nil>}] <nil>}" module=grpc
time="2020-08-21T04:15:53.228341931Z" level=info msg="ClientConn switching balancer to \"pick_first\"" module=grpc
time="2020-08-21T04:15:53.267536891Z" level=info msg="starting containerd" revision=ff48f57fc83a8c44cf4ad5d672424a98ba37ded6 version=1.3.2
time="2020-08-21T04:15:53.293682909Z" level=info msg="loading plugin \"io.containerd.content.v1.content\"..." type=io.containerd.content.v1
time="2020-08-21T04:15:53.293780646Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.btrfs\"..." type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.293936988Z" level=info msg="skip loading plugin \"io.containerd.snapshotter.v1.btrfs\"..." error="path /var/lib/docker/containerd/daemon/io.containerd.snapshotter.v1.btrfs must be a btrfs filesystem to be used with the btrfs snapshotter: skip plugin" type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.293964887Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.devmapper\"..." type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.293984197Z" level=warning msg="failed to load plugin io.containerd.snapshotter.v1.devmapper" error="devmapper not configured"
time="2020-08-21T04:15:53.293997214Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.aufs\"..." type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.294986898Z" level=info msg="skip loading plugin \"io.containerd.snapshotter.v1.aufs\"..." error="modprobe aufs failed: \"modprobe: FATAL: Module aufs not found.\\n\": exit status 1: skip plugin" type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.295014313Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.native\"..." type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.295072757Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.overlayfs\"..." type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.295179898Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.zfs\"..." type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.295303574Z" level=info msg="skip loading plugin \"io.containerd.snapshotter.v1.zfs\"..." error="path /var/lib/docker/containerd/daemon/io.containerd.snapshotter.v1.zfs must be a zfs filesystem to be used with the zfs snapshotter: skip plugin" type=io.containerd.snapshotter.v1
time="2020-08-21T04:15:53.295325250Z" level=info msg="loading plugin \"io.containerd.metadata.v1.bolt\"..." type=io.containerd.metadata.v1
time="2020-08-21T04:15:53.295361335Z" level=warning msg="could not use snapshotter devmapper in metadata plugin" error="devmapper not configured"
time="2020-08-21T04:15:53.295375727Z" level=info msg="metadata content store policy set" policy=shared
time="2020-08-21T04:15:53.301723286Z" level=info msg="loading plugin \"io.containerd.differ.v1.walking\"..." type=io.containerd.differ.v1
time="2020-08-21T04:15:53.301750718Z" level=info msg="loading plugin \"io.containerd.gc.v1.scheduler\"..." type=io.containerd.gc.v1
time="2020-08-21T04:15:53.301787113Z" level=info msg="loading plugin \"io.containerd.service.v1.containers-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301804997Z" level=info msg="loading plugin \"io.containerd.service.v1.content-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301819377Z" level=info msg="loading plugin \"io.containerd.service.v1.diff-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301834929Z" level=info msg="loading plugin \"io.containerd.service.v1.images-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301849567Z" level=info msg="loading plugin \"io.containerd.service.v1.leases-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301864811Z" level=info msg="loading plugin \"io.containerd.service.v1.namespaces-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301881208Z" level=info msg="loading plugin \"io.containerd.service.v1.snapshots-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.301896371Z" level=info msg="loading plugin \"io.containerd.runtime.v1.linux\"..." type=io.containerd.runtime.v1
time="2020-08-21T04:15:53.301985616Z" level=info msg="loading plugin \"io.containerd.runtime.v2.task\"..." type=io.containerd.runtime.v2
time="2020-08-21T04:15:53.302054611Z" level=info msg="loading plugin \"io.containerd.monitor.v1.cgroups\"..." type=io.containerd.monitor.v1
time="2020-08-21T04:15:53.302400158Z" level=info msg="loading plugin \"io.containerd.service.v1.tasks-service\"..." type=io.containerd.service.v1
time="2020-08-21T04:15:53.302430863Z" level=info msg="loading plugin \"io.containerd.internal.v1.restart\"..." type=io.containerd.internal.v1
time="2020-08-21T04:15:53.302471742Z" level=info msg="loading plugin \"io.containerd.grpc.v1.containers\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302488274Z" level=info msg="loading plugin \"io.containerd.grpc.v1.content\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302502400Z" level=info msg="loading plugin \"io.containerd.grpc.v1.diff\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302516513Z" level=info msg="loading plugin \"io.containerd.grpc.v1.events\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302529777Z" level=info msg="loading plugin \"io.containerd.grpc.v1.healthcheck\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302544030Z" level=info msg="loading plugin \"io.containerd.grpc.v1.images\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302563320Z" level=info msg="loading plugin \"io.containerd.grpc.v1.leases\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302577909Z" level=info msg="loading plugin \"io.containerd.grpc.v1.namespaces\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302592577Z" level=info msg="loading plugin \"io.containerd.internal.v1.opt\"..." type=io.containerd.internal.v1
time="2020-08-21T04:15:53.302637575Z" level=info msg="loading plugin \"io.containerd.grpc.v1.snapshots\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302656409Z" level=info msg="loading plugin \"io.containerd.grpc.v1.tasks\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302672074Z" level=info msg="loading plugin \"io.containerd.grpc.v1.version\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302685266Z" level=info msg="loading plugin \"io.containerd.grpc.v1.introspection\"..." type=io.containerd.grpc.v1
time="2020-08-21T04:15:53.302868294Z" level=info msg=serving... address=/var/run/docker/containerd/containerd-debug.sock
time="2020-08-21T04:15:53.302918116Z" level=info msg=serving... address=/var/run/docker/containerd/containerd.sock.ttrpc
time="2020-08-21T04:15:53.302960020Z" level=info msg=serving... address=/var/run/docker/containerd/containerd.sock
time="2020-08-21T04:15:53.302972824Z" level=info msg="containerd successfully booted in 0.036003s"
time="2020-08-21T04:15:53.329573155Z" level=info msg="parsed scheme: \"unix\"" module=grpc
time="2020-08-21T04:15:53.329597876Z" level=info msg="scheme \"unix\" not registered, fallback to default scheme" module=grpc
time="2020-08-21T04:15:53.329617418Z" level=info msg="ccResolverWrapper: sending update to cc: {[{unix:///var/run/docker/containerd/containerd.sock 0  <nil>}] <nil>}" module=grpc
time="2020-08-21T04:15:53.329628485Z" level=info msg="ClientConn switching balancer to \"pick_first\"" module=grpc
time="2020-08-21T04:15:53.330391857Z" level=info msg="parsed scheme: \"unix\"" module=grpc
time="2020-08-21T04:15:53.330407128Z" level=info msg="scheme \"unix\" not registered, fallback to default scheme" module=grpc
time="2020-08-21T04:15:53.330421554Z" level=info msg="ccResolverWrapper: sending update to cc: {[{unix:///var/run/docker/containerd/containerd.sock 0  <nil>}] <nil>}" module=grpc
time="2020-08-21T04:15:53.330432394Z" level=info msg="ClientConn switching balancer to \"pick_first\"" module=grpc
time="2020-08-21T04:15:53.331040317Z" level=warning msg="[graphdriver] WARNING: the devicemapper storage-driver is deprecated, and will be removed in a future release"
time="2020-08-21T04:15:53.356206869Z" level=info msg="Creating filesystem ext4 on device docker-202:1-399556-base, mkfs args: [/dev/mapper/docker-202:1-399556-base]" storage-driver=devicemapper
time="2020-08-21T04:16:27.287331918Z" level=info msg="Successfully created filesystem ext4 on device docker-202:1-399556-base" storage-driver=devicemapper
time="2020-08-21T04:16:27.332082287Z" level=warning msg="Your kernel does not support cgroup blkio weight"
time="2020-08-21T04:16:27.332107608Z" level=warning msg="Your kernel does not support cgroup blkio weight_device"
time="2020-08-21T04:16:27.332749473Z" level=info msg="Loading containers: start."
time="2020-08-21T04:16:27.338445933Z" level=warning msg="Running iptables --wait -t nat -L -n failed with message: `iptables v1.4.18: unknown option \"--wait\"\nTry `iptables -h' or 'iptables --help' for more information.`, error: exit status 2"
time="2020-08-21T04:16:27.428460795Z" level=info msg="Default bridge (docker0) is assigned with an IP address 172.17.0.0/16. Daemon option --bip can be used to set a preferred IP address"
time="2020-08-21T04:16:27.457185985Z" level=info msg="Loading containers: done."
time="2020-08-21T04:16:27.512657042Z" level=info msg="Docker daemon" commit=369ce74 graphdriver(s)=devicemapper version=19.03.6-ce
time="2020-08-21T04:16:27.513755880Z" level=info msg="Daemon has completed initialization"
time="2020-08-21T04:16:27.547845279Z" level=info msg="API listen on /var/run/docker.sock"
time="2020-08-21T04:16:29.871693460Z" level=info msg="shim containerd-shim started" address=/containerd-shim/0b202596f315e670fb49a5900347ed02137d3d906f7c487defd4becdabdef710.sock debug=false pid=3814
time="2020-08-21T04:16:57.002208616Z" level=info msg="shim containerd-shim started" address=/containerd-shim/705d08f4461b43c1d37daf78ab0d8eaa8497f5ae15ae4d9b1fc0a9edd970ce4c.sock debug=false pid=4411
time="2020-08-21T04:17:04.960671947Z" level=info msg="shim containerd-shim started" address=/containerd-shim/6355bc77b1b9d9f869247416f15d80237fa64a4c5e93601f1d84efd219dbb959.sock debug=false pid=4720
time="2020-08-21T04:26:40.563254944Z" level=info msg="shim reaped" id=f6d06cf906840edcfc4b6543a451327cd65508496490aead6a469c0a3f2ae39a
time="2020-08-21T04:26:40.573435160Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:26:40.780737014Z" level=info msg="shim reaped" id=88044ee3ff34254488c0ff0acce5e7d981dbb3c8ef195221534e7762418d8cc7
time="2020-08-21T04:26:40.790760721Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:26:55.497481958Z" level=info msg="shim containerd-shim started" address=/containerd-shim/67fbef73083b7f3f9e3ae1b1452b39ba467a9a114bc735aec435e488639a15c6.sock debug=false pid=7077
time="2020-08-21T04:26:56.935086286Z" level=info msg="shim containerd-shim started" address=/containerd-shim/f0945ccd5f263f01de1d40b4e22d8a37141eed4d541a7264a1254456ae785ee1.sock debug=false pid=7257
time="2020-08-21T04:26:57.592068008Z" level=info msg="shim reaped" id=ff8c9e392d89afe3a741a233aeced6bffc530ae3704a0b0d5ceda39fe870189c
time="2020-08-21T04:26:57.602570709Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:26:59.555657732Z" level=info msg="shim containerd-shim started" address=/containerd-shim/c01621371d3c18a08e01cd6ca99a82bcb1eb24bca3495800db7914ca8a7768f9.sock debug=false pid=7550
time="2020-08-21T04:40:55.072926243Z" level=info msg="shim reaped" id=eb693c6aa7f76319cc3d5e7eafcc1ec44da8666f11485118aa658d4305139b56
time="2020-08-21T04:40:55.077656056Z" level=info msg="shim reaped" id=a05f51e5278a94dfe1fcbf797ec61dc85e22ac8930925c548d63ba3bb05ccae3
time="2020-08-21T04:40:55.083129444Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:40:55.094506436Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:41:02.065157501Z" level=info msg="shim containerd-shim started" address=/containerd-shim/8305c152e2466a594b0c0e81b8a79b1eea43678aecf4210eb6c562d05df23d13.sock debug=false pid=10486
time="2020-08-21T04:41:02.242827735Z" level=info msg="shim containerd-shim started" address=/containerd-shim/46a11d44426675740103064fcda3d5fa36bb3fd5012023b64837dab5789bba0b.sock debug=false pid=10563
time="2020-08-21T04:41:02.444255882Z" level=info msg="shim containerd-shim started" address=/containerd-shim/432794594252813cb1c7d666c2ca3e32a30207854e4186ee320af32c944ee7da.sock debug=false pid=10647
time="2020-08-21T04:41:03.453321038Z" level=info msg="shim reaped" id=864f7321dde6a7f8f99d3b7a2bfabd5f62551d3cb7ae46c3fd89d747b2384758
time="2020-08-21T04:41:03.463562746Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:55:03.830145260Z" level=info msg="shim reaped" id=81969c97aa5fe0a722c2aea05ea824fe10a58b77410778a888d3cbf08a972f9a
time="2020-08-21T04:55:03.835047691Z" level=info msg="shim reaped" id=660968b3d65f85223ba7b7dcc1d72bd750a85fd1f0563f8866222dcad5ae35fc
time="2020-08-21T04:55:03.840236696Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
time="2020-08-21T04:55:03.852221800Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"



-------------------------------------
/var/log/containers/nginx-proxy/error.log
-------------------------------------




-------------------------------------
/var/log/eb-activity.log
-------------------------------------
[2020-08-21T04:26:38.760Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage0/InfraCleanEbextension] : Completed activity. Result:
  Cleaned ebextensions subdirectories from /var/app/staging.
[2020-08-21T04:26:38.760Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage0] : Completed activity. Result:
  Application update - Command CMD-AppDeploy stage 0 completed
[2020-08-21T04:26:38.760Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1] : Starting activity...
[2020-08-21T04:26:38.760Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook] : Starting activity...
[2020-08-21T04:26:38.760Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/00stop-task.sh] : Starting activity...
[2020-08-21T04:26:42.800Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/00stop-task.sh] : Completed activity. Result:
  + grep -q 'eb-ecs start/'
  + initctl status eb-ecs
  + initctl stop eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  eb-ecs stop/waiting
[2020-08-21T04:26:42.800Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/01flip-dir.sh] : Starting activity...
[2020-08-21T04:26:42.993Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/01flip-dir.sh] : Completed activity. Result:
  + . /opt/elasticbeanstalk/hooks/common.sh
  ++ /opt/elasticbeanstalk/bin/get-config container -k app_deploy_dir
  + EB_CONFIG_APP_CURRENT=/var/app/current
  ++ /opt/elasticbeanstalk/bin/get-config container -k app_staging_dir
  + EB_CONFIG_APP_STAGING=/var/app/staging
  + '[' -z /var/app/staging ']'
  + '[' -d /var/app/current ']'
  + mv /var/app/current /var/app/current.old
  + mv /var/app/staging /var/app/current
  + nohup rm -rf /var/app/current.old
[2020-08-21T04:26:42.993Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/02update-credentials.sh] : Starting activity...
[2020-08-21T04:26:43.201Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/02update-credentials.sh] : Completed activity.
[2020-08-21T04:26:43.201Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/03start-task.sh] : Starting activity...
[2020-08-21T04:55:05.394Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/03start-task.sh] : Activity execution failed, because: + . /opt/elasticbeanstalk/hooks/common.sh
  + RETRY=0
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=1
  + sleep 3
  + '[' 1 -gt 1 ']'
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=2
  + sleep 3
  + '[' 2 -gt 1 ']'
  + error_exit 'Failed to start ECS task after retrying 2 times.' 1
  + error 'Failed to start ECS task after retrying 2 times.'
  + echo 'Failed to start ECS task after retrying 2 times.'
  Failed to start ECS task after retrying 2 times.
  + eventHelper.py --msg 'Failed to start ECS task after retrying 2 times.' --severity ERROR
  + exit 1 (ElasticBeanstalk::ExternalInvocationError)
caused by: + . /opt/elasticbeanstalk/hooks/common.sh
  + RETRY=0
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=1
  + sleep 3
  + '[' 1 -gt 1 ']'
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=2
  + sleep 3
  + '[' 2 -gt 1 ']'
  + error_exit 'Failed to start ECS task after retrying 2 times.' 1
  + error 'Failed to start ECS task after retrying 2 times.'
  + echo 'Failed to start ECS task after retrying 2 times.'
  Failed to start ECS task after retrying 2 times.
  + eventHelper.py --msg 'Failed to start ECS task after retrying 2 times.' --severity ERROR
  + exit 1 (Executor::NonZeroExitStatus)


[2020-08-21T04:55:05.395Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook/03start-task.sh] : Activity failed.
[2020-08-21T04:55:05.395Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1/AppDeployEnactHook] : Activity failed.
[2020-08-21T04:55:05.395Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4/AppDeployStage1] : Activity failed.
[2020-08-21T04:55:05.395Z] INFO  [6351]  - [Application update travis-be2f5a2c12847875dc77c06b8f70fda12e340c48-1597983943@4] : Completed activity. Result:
  Application update - Command CMD-AppDeploy failed
[2020-08-21T05:53:37.836Z] INFO  [7653]  - [CMD-TailLogs] : Starting activity...
[2020-08-21T05:53:37.836Z] INFO  [7653]  - [CMD-TailLogs/AddonsBefore] : Starting activity...
[2020-08-21T05:53:37.836Z] INFO  [7653]  - [CMD-TailLogs/AddonsBefore] : Completed activity.
[2020-08-21T05:53:37.836Z] INFO  [7653]  - [CMD-TailLogs/TailLogsDockerPS] : Starting activity...
[2020-08-21T05:53:37.836Z] INFO  [7653]  - [CMD-TailLogs/TailLogsDockerPS/DockerPS] : Starting activity...
[2020-08-21T05:53:37.902Z] INFO  [7653]  - [CMD-TailLogs/TailLogsDockerPS/DockerPS] : Completed activity.
[2020-08-21T05:53:37.902Z] INFO  [7653]  - [CMD-TailLogs/TailLogsDockerPS] : Completed activity. Result:
  CMD-TailLogs - stage 0 - Command CMD-TailLogs stage 0 completed
[2020-08-21T05:53:37.902Z] INFO  [7653]  - [CMD-TailLogs/TailLogs] : Starting activity...
[2020-08-21T05:53:37.902Z] INFO  [7653]  - [CMD-TailLogs/TailLogs/TailLogs] : Starting activity...



-------------------------------------
/var/log/eb-commandprocessor.log
-------------------------------------
[2020-08-21T04:26:36.015Z] DEBUG [6351]  : Loaded 5 actions for stage 0.
[2020-08-21T04:26:36.015Z] INFO  [6351]  : Running 1 of 5 actions: DownloadSourceBundle...
[2020-08-21T04:26:36.343Z] INFO  [6351]  : Running 2 of 5 actions: EbExtensionPreBuild...
[2020-08-21T04:26:36.764Z] INFO  [6351]  : Running 3 of 5 actions: AppDeployPreHook...
[2020-08-21T04:26:38.336Z] INFO  [6351]  : Running 4 of 5 actions: EbExtensionPostBuild...
[2020-08-21T04:26:38.759Z] INFO  [6351]  : Running 5 of 5 actions: InfraCleanEbextension...
[2020-08-21T04:26:38.760Z] INFO  [6351]  : Running stage 1 of command CMD-AppDeploy...
[2020-08-21T04:26:38.760Z] DEBUG [6351]  : Loaded 2 actions for stage 1.
[2020-08-21T04:26:38.760Z] INFO  [6351]  : Running 1 of 2 actions: AppDeployEnactHook...
[2020-08-21T04:55:05.395Z] ERROR [6351]  : Command execution failed: Activity failed. (ElasticBeanstalk::ActivityFatalError)
caused by: + . /opt/elasticbeanstalk/hooks/common.sh
  + RETRY=0
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=1
  + sleep 3
  + '[' 1 -gt 1 ']'
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=2
  + sleep 3
  + '[' 2 -gt 1 ']'
  + error_exit 'Failed to start ECS task after retrying 2 times.' 1
  + error 'Failed to start ECS task after retrying 2 times.'
  + echo 'Failed to start ECS task after retrying 2 times.'
  Failed to start ECS task after retrying 2 times.
  + eventHelper.py --msg 'Failed to start ECS task after retrying 2 times.' --severity ERROR
  + exit 1 (ElasticBeanstalk::ExternalInvocationError)
caused by: + . /opt/elasticbeanstalk/hooks/common.sh
  + RETRY=0
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=1
  + sleep 3
  + '[' 1 -gt 1 ']'
  + initctl start eb-ecs EB_EVENT_FILE=/tmp/eventsfile20200821-6351-39xzvw
  initctl: Job failed to start
  + '[' -f /etc/elasticbeanstalk/.eb-ecs-start-no-retry ']'
  + warn 'Failed to start ECS task, retrying...'
  + echo 'Failed to start ECS task, retrying...'
  Failed to start ECS task, retrying...
  + eventHelper.py --msg 'Failed to start ECS task, retrying...' --severity WARN
  + RETRY=2
  + sleep 3
  + '[' 2 -gt 1 ']'
  + error_exit 'Failed to start ECS task after retrying 2 times.' 1
  + error 'Failed to start ECS task after retrying 2 times.'
  + echo 'Failed to start ECS task after retrying 2 times.'
  Failed to start ECS task after retrying 2 times.
  + eventHelper.py --msg 'Failed to start ECS task after retrying 2 times.' --severity ERROR
  + exit 1 (Executor::NonZeroExitStatus)


[2020-08-21T04:55:05.395Z] ERROR [6351]  : Command CMD-AppDeploy failed!
[2020-08-21T04:55:05.397Z] INFO  [6351]  : Command processor returning results: 
{"status":"FAILURE","api_version":"1.0","results":[{"status":"FAILURE","msg":"(TRUNCATED)...ailed to start ECS task after retrying 2 times.'\n+ echo 'Failed to start ECS task after retrying 2 times.'\nFailed to start ECS task after retrying 2 times.\n+ eventHelper.py --msg 'Failed to start ECS task after retrying 2 times.' --severity ERROR\n+ exit 1. \nHook /opt/elasticbeanstalk/hooks/appdeploy/enact/03start-task.sh failed. For more detail, check /var/log/eb-activity.log using console or EB CLI","returncode":1,"events":[{"msg":"ECS task: arn:aws:ecs:ap-southeast-1:191868485217:task/cbf8d2a2-2052-46d5-891f-d353c22baacb is still PENDING after 840 seconds.","severity":"ERROR","timestamp":1597984849},{"msg":"ECS task: arn:aws:ecs:ap-southeast-1:191868485217:task/28bdf84b-df93-4da5-b8ae-b93eb05cb586 is still PENDING after 840 seconds.","severity":"ERROR","timestamp":1597985702},{"msg":"Failed to start ECS task after retrying 2 times.","severity":"ERROR","timestamp":1597985705}]}],"truncated":"true"}
[2020-08-21T05:53:37.830Z] DEBUG [7653]  : Reading config file: /etc/elasticbeanstalk/.aws-eb-stack.properties
[2020-08-21T05:53:37.830Z] DEBUG [7653]  : Checking if the command processor should execute...
[2020-08-21T05:53:37.832Z] DEBUG [7653]  : Checking whether the command is applicable to instance (i-0c3c990a1d1e77f55)..
[2020-08-21T05:53:37.832Z] INFO  [7653]  : Command is applicable to this instance (i-0c3c990a1d1e77f55)..
[2020-08-21T05:53:37.832Z] DEBUG [7653]  : Checking if the received command stage is valid..
[2020-08-21T05:53:37.832Z] INFO  [7653]  : No stage_num in command. Valid stage..
[2020-08-21T05:53:37.833Z] INFO  [7653]  : Received command CMD-TailLogs: {"execution_data"=>"*", "instance_ids"=>["i-0c3c990a1d1e77f55"], "data"=>"d9029598-a6cb-4a68-a3b2-ecd5a158b0d7", "command_name"=>"CMD-TailLogs", "api_version"=>"1.0", "resource_name"=>"AWSEBAutoScalingGroup", "request_id"=>"d9029598-a6cb-4a68-a3b2-ecd5a158b0d7"}
[2020-08-21T05:53:37.833Z] INFO  [7653]  : Command processor should execute command.
[2020-08-21T05:53:37.833Z] DEBUG [7653]  : Storing current stage..
[2020-08-21T05:53:37.833Z] DEBUG [7653]  : Stage_num does not exist. Not saving null stage. Returning..
[2020-08-21T05:53:37.833Z] DEBUG [7653]  : Reading config file: /etc/elasticbeanstalk/.aws-eb-stack.properties
[2020-08-21T05:53:37.833Z] DEBUG [7653]  : Retrieving metadata for key: AWS::ElasticBeanstalk::Ext||_ContainerConfigFileContent||commands..
[2020-08-21T05:53:37.833Z] DEBUG [7653]  : Retrieving metadata for key: AWS::ElasticBeanstalk::Ext||_API||_Commands..
[2020-08-21T05:53:37.834Z] INFO  [7653]  : Found enabled addons: ["logstreaming", "logpublish"].
[2020-08-21T05:53:37.835Z] INFO  [7653]  : Updating Command definition of addon logstreaming.
[2020-08-21T05:53:37.835Z] INFO  [7653]  : Updating Command definition of addon logpublish.
[2020-08-21T05:53:37.835Z] DEBUG [7653]  : Loaded definition of Command CMD-TailLogs.
[2020-08-21T05:53:37.835Z] INFO  [7653]  : Executing CMD-TailLogs
[2020-08-21T05:53:37.836Z] INFO  [7653]  : Executing command: CMD-TailLogs...
[2020-08-21T05:53:37.836Z] INFO  [7653]  : Executing command CMD-TailLogs activities...
[2020-08-21T05:53:37.836Z] DEBUG [7653]  : Setting environment variables..
[2020-08-21T05:53:37.836Z] INFO  [7653]  : Running AddonsBefore for command CMD-TailLogs...
[2020-08-21T05:53:37.836Z] DEBUG [7653]  : Running stages of Command CMD-TailLogs from stage 0 to stage 1...
[2020-08-21T05:53:37.836Z] INFO  [7653]  : Running stage 0 of command CMD-TailLogs...
[2020-08-21T05:53:37.836Z] DEBUG [7653]  : Loaded 1 actions for stage 0.
[2020-08-21T05:53:37.836Z] INFO  [7653]  : Running 1 of 1 actions: DockerPS...
[2020-08-21T05:53:37.902Z] INFO  [7653]  : Running stage 1 of command CMD-TailLogs...
[2020-08-21T05:53:37.902Z] DEBUG [7653]  : Loaded 1 actions for stage 1.
[2020-08-21T05:53:37.902Z] INFO  [7653]  : Running 1 of 1 actions: TailLogs...



-------------------------------------
/var/log/docker-ps.log
-------------------------------------
'docker ps' ran at Fri Aug 21 05:53:37 UTC 2020: 
CONTAINER ID        IMAGE                            COMMAND             CREATED             STATUS                 PORTS               NAMES
132d6f6db94a        amazon/amazon-ecs-agent:latest   "/agent"            2 hours ago         Up 2 hours (healthy)                       ecs-agent



-------------------------------------
/var/log/containers/php-app-88044ee3ff34-stdouterr.log
-------------------------------------
[21-Aug-2020 04:16:57] NOTICE: fpm is running, pid 1
[21-Aug-2020 04:16:57] NOTICE: ready to handle connections
[21-Aug-2020 04:26:40] NOTICE: Finishing ...
[21-Aug-2020 04:26:40] NOTICE: exiting, bye-bye!


