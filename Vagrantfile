Vagrant.configure("2") do |config|

  config.vagrant.plugins = "vagrant-docker-compose"

  config.vm.box = "ubuntu/xenial64"
  
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 9200, host: 9200

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "4096"
  end

  config.vm.provision "shell", inline: <<-SHELL
    sudo sysctl -w vm.max_map_count=262144
  SHELL

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: "/vagrant/app/docker-compose.yml", run: "always"
end