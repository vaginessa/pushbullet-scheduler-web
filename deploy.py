from fabric.contrib.files import append, exists, sed
from fabric.api import env, local, run
import random


REPO_URL = 'https://github.com/guswnsxodlf/pushbullet-scheduler-web.git'

def get_latest_source(project_path):
    if exists(project_path + '/.git'):
        run('cd {} && git fetch'.format(project_path))
    else:
        run('git clone {} {}'.format(REPO_URL, project_path))
    current_commit = local('git log -n 1 --format=%H', capture=True)
    run('cd {} && git reset --hard {}'.format(project_path, current_commit))

def deploy():
    project_path = '/home/{}/projects/pushbullet-scheduler-web'.format(env.user)
    get_latest_source(project_path)