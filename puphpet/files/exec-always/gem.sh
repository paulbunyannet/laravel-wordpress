#!/usr/bin/env bash
sudo yum -y install gem

# install YARN
# https://yarnpkg.com/en/docs/install#linux-tab
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
sudo yum -y install yarn