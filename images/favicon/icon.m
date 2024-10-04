hold on;
set(gca,'Position',[0 0 1 1],'FontSize',15);
% set(gcf,'Position',[1200 200 128 128]);
set(gcf,'Position',[1200 200 128 128],...
    'PaperUnits','Points','PaperSize',[128 128]);
radius = 2/sqrt(3);

center = [-1,-1/sqrt(3)];
theta = [90,30];
plotArc(center,radius,theta)

center = [-1,1/sqrt(3)];
theta = [-90,-30];
plotArc(center,radius,theta)

center = [1,-1/sqrt(3)];
theta = [90,150];
plotArc(center,radius,theta)

center = [1,1/sqrt(3)];
theta = [-90,-150];
plotArc(center,radius,theta)

axis equal; axis off; axis([-1 1 -1 1]);
% delete("icon.svg");
% saveas(gcf,"icon.svg");
delete("icon.pdf");
saveas(gcf,"icon.pdf");

function plotArc(center,radius,theta)
theta = linspace(theta(1),theta(2),10);
x = center(1) + radius*cosd(theta);
y = center(2) + radius*sind(theta);
plot(x,y,'k','LineWidth',10);
end