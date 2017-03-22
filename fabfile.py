from fabric.contrib.files import exists, sed
from fabric.api import env, local, run


REPO_URL = 'https://github.com/guswnsxodlf/pushbullet-scheduler-web.git'


def get_latest_source(project_path):
    if exists(project_path + '/.git'):
        run('cd {} && git fetch'.format(project_path))
    else:
        run('git clone {} {}'.format(REPO_URL, project_path))
    current_commit = local('git log -n 1 --format=%H', capture=True)
    run('cd {} && git reset --hard {}'.format(project_path, current_commit))


def update_settings(project_path, server_url):
    setting_path = project_path + '/app/src/config/index.js'
    sed(setting_path, 'SOME_SERVER_URL', server_url)


def update_packages(project_path):
    run('cd {} && npm install --production'.format(project_path))


def production(project_path):
    run('cd {} && npm run prod'.format(project_path))


def deploy(api_server_url):
    project_path = '/home/{}/projects/pushbullet-scheduler-web'.format(env.user)
    get_latest_source(project_path)
    update_settings(project_path, api_server_url)
    update_packages(project_path)
    production(project_path)
