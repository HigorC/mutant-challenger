Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 9200, host: 9200

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "4096"
  end

  config.vm.provision "shell", inline: <<-SHELL
    sudo sysctl -w vm.max_map_count=262144
  SHELL

  ####### Provision #######
  #config.vm.provision "docker" do |docker|
    #docker.compose = true
    #docker.build_image "/vagrant/app",
    #  args: "-t example/hello_web"
    #docker.run "hello_web",
    #  image: "example/hello_web:latest",
    #  args: "-p 80:3000"
  #end

  #config.vm.provider "docker" do |d|
  #  d.compose = true
  #end

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: "/vagrant/app/docker-compose.yml", run: "always"
end